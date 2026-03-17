import { Fragment } from "react";
import {
  ArrowRight,
  BadgeIndianRupee,
  BriefcaseBusiness,
  Building2,
  CalendarRange,
  CheckCircle2,
  CircleDashed,
  Globe,
  GraduationCap,
  HeartPulse,
  Hospital,
  Landmark,
  LayoutGrid,
  Mail,
  MapPinned,
  Megaphone,
  MessageCircleMore,
  Phone,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Tv,
  Users,
  Video,
} from "lucide-react";

const iconMap = {
  target: Target,
  growth: TrendingUp,
  campus: MapPinned,
  program: GraduationCap,
  media: Video,
  channel: Globe,
  search: Search,
  social: Megaphone,
  ads: TrendingUp,
  whatsapp: MessageCircleMore,
  team: Users,
  hospital: Hospital,
  checklist: CheckCircle2,
  budget: BadgeIndianRupee,
  offline: Landmark,
  tv: Tv,
  contact: Phone,
  building: Building2,
  mail: Mail,
  calendar: CalendarRange,
  layout: LayoutGrid,
  briefcase: BriefcaseBusiness,
};

function IconBadge({ icon, className = "" }) {
  const Icon = iconMap[icon] || Sparkles;

  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-sky/20 bg-sky/10 text-sky shadow-[0_18px_40px_rgba(56,189,248,0.12)] ${className}`}
    >
      <Icon className="h-5 w-5" />
    </div>
  );
}

function SectionLabel({ text }) {
  return <div className="glass-pill">{text}</div>;
}

function Card({ children, className = "" }) {
  return <div className={`bento-card hover-3d ${className}`}>{children}</div>;
}

function List({ items, icon = "check", compact = false }) {
  return (
    <ul className={compact ? "space-y-2" : "space-y-3"}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-slate-200">
          <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-sky/15 text-sky">
            {icon === "arrow" ? (
              <ArrowRight className="h-3.5 w-3.5" />
            ) : (
              <CheckCircle2 className="h-3.5 w-3.5" />
            )}
          </span>
          <span className={`${compact ? "text-sm" : "text-[15px]"} leading-relaxed`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Slide({ slide, index }) {
  return (
    <div className="slide-shell h-full">
      <div className="slide-scroll relative flex h-full min-h-0 flex-col overflow-y-auto pr-1">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3">
            <SectionLabel text={slide.eyebrow} />
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Slide {index + 1}</p>
              <h1 className="max-w-4xl font-display text-[2.05rem] font-bold leading-[1.08] text-white sm:text-[2.45rem] lg:text-[2.95rem]">
                {slide.title}
              </h1>
              {slide.subtitle ? (
                <p className="max-w-3xl font-display text-lg font-semibold text-sky sm:text-xl">
                  {slide.subtitle}
                </p>
              ) : null}
              {slide.description ? (
                <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  {slide.description}
                </p>
              ) : null}
            </div>
          </div>

          {slide.meta ? (
            <Card className="max-w-sm p-5">
              <div className="flex items-start gap-4">
                <IconBadge icon={slide.meta.icon} />
                <div>
                  <p className="font-display text-lg font-semibold text-white">{slide.meta.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{slide.meta.copy}</p>
                </div>
              </div>
            </Card>
          ) : null}
        </div>

        {slide.type === "hero" && <HeroSlide slide={slide} />}
        {slide.type === "objective" && <ObjectiveSlide slide={slide} />}
        {slide.type === "programs" && <ProgramsSlide slide={slide} />}
        {slide.type === "phase" && <PhaseSlide slide={slide} />}
        {slide.type === "channels" && <ChannelsSlide slide={slide} />}
        {slide.type === "budget" && <BudgetSlide slide={slide} />}
        {slide.type === "collaboration" && <CollaborationSlide slide={slide} />}
        {slide.type === "offline" && <OfflineSlide slide={slide} />}
        {slide.type === "requirements" && <RequirementsSlide slide={slide} />}
        {slide.type === "outcome" && <OutcomeSlide slide={slide} />}
        {slide.type === "final-budget" && <FinalBudgetSlide slide={slide} />}
        {slide.type === "positioning" && <PositioningSlide />}
        {slide.type === "contact" && <ContactSlide slide={slide} />}
      </div>
    </div>
  );
}

function HeroSlide({ slide }) {
  return (
    <div className="grid flex-1 gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.8fr)]">
      <Card className="relative overflow-hidden p-7 md:p-10">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-sky/10 to-transparent blur-3xl" />
        <div className="relative flex h-full flex-col justify-between gap-6">
          <div className="space-y-5">
            <div className="glass-pill">Presentation Website Deck</div>
            <h2 className="max-w-3xl font-display text-3xl font-bold leading-[1.1] sm:text-4xl xl:text-[3.55rem]">
              <span className="text-white">ACLAS</span>
              <br />
              <span className="text-gradient">Integrated Digital Marketing Strategy</span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              A premium, stage-by-stage admission growth plan built to make ACLAS visible,
              trusted, and conversion-ready across every major program.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {slide.highlights.map((item) => (
              <Card key={item.title} className="p-5">
                <div className="flex items-center gap-3">
                  <IconBadge icon={item.icon} className="h-11 w-11 rounded-xl" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.kicker}</p>
                    <p className="font-display text-lg font-semibold text-white">{item.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>

      <Card className="flex flex-col justify-between p-7 md:p-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <IconBadge icon="building" />
            <div>
              <p className="font-display text-2xl font-semibold text-white">Proposal Snapshot</p>
              <p className="text-sm text-slate-400">March 18 to September 15</p>
            </div>
          </div>
          <List items={slide.snapshot} compact />
        </div>

        <div className="mt-6 grid gap-4">
          {slide.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-4"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{stat.label}</p>
              <p className="mt-2 font-display text-3xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function ObjectiveSlide({ slide }) {
  return (
    <div className="grid flex-1 gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
      <Card className="p-7 md:p-8">
        <div className="flex items-center gap-3">
          <IconBadge icon="target" />
          <div>
            <p className="font-display text-2xl font-semibold text-white">Strategic Objective</p>
            <p className="text-sm text-slate-400">
              Position ACLAS as Malappuram&apos;s most trusted healthcare and career-focused college.
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {slide.objectives.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-center gap-3">
                <IconBadge icon={item.icon} className="h-10 w-10 rounded-xl" />
                <p className="font-display text-lg font-semibold text-white">{item.title}</p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.copy}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-7 md:p-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <IconBadge icon="growth" />
            <div>
              <p className="font-display text-2xl font-semibold text-white">Outcome Focus</p>
              <p className="text-sm text-slate-400">
                Every action is built around visible demand and admission movement.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-sky/20 bg-gradient-to-br from-sky/15 to-white/5 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.24em] text-sky">
              Real hospital exposure is the differentiator
            </p>
            <p className="mt-3 font-display text-3xl font-bold leading-tight text-white">
              Trust + Career Clarity + Campus Visits = Admission Momentum
            </p>
          </div>

          <List items={slide.drivers} />
        </div>
      </Card>
    </div>
  );
}

function ProgramsSlide({ slide }) {
  return (
    <div className="grid flex-1 gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <Card className="p-7 md:p-8">
        <div className="mb-5 flex items-center gap-3">
          <IconBadge icon="program" />
          <div>
            <p className="font-display text-2xl font-semibold text-white">High-Conversion Core Courses</p>
            <p className="text-sm text-slate-400">
              Primary push for faster lead-to-admission conversion.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {slide.coreCourses.map((course) => (
            <Card key={course} className="p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-sky">Core Course</p>
              <p className="mt-3 font-display text-xl font-semibold leading-snug text-white">{course}</p>
            </Card>
          ))}
        </div>
      </Card>

      <Card className="p-7 md:p-8">
        <div className="mb-5 flex items-center gap-3">
          <IconBadge icon="layout" />
          <div>
            <p className="font-display text-2xl font-semibold text-white">Supporting Courses</p>
            <p className="text-sm text-slate-400">
              Continuous parallel promotion across every admission phase.
            </p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {slide.supportingCourses.map((course) => (
            <div
              key={course}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-slate-200"
            >
              {course}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function PhaseSlide({ slide }) {
  return (
    <div className="grid flex-1 gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
      <Card className="p-7 md:p-8">
        <div className="flex items-center gap-3">
          <IconBadge icon="campus" />
          <div>
            <p className="font-display text-2xl font-semibold text-white">Goals</p>
            <p className="text-sm text-slate-400">{slide.audience}</p>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <div className="rounded-[1.75rem] border border-sky/20 bg-sky/10 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-sky">Core Goal</p>
            <p className="mt-3 font-display text-3xl font-bold text-white">{slide.goal}</p>
          </div>
          <List items={slide.goals} />
        </div>
      </Card>

      <div className="grid gap-4">
        {slide.execution.map((item) => (
          <Card key={item.title} className="p-5 md:p-6">
            <div className="flex items-start gap-4">
              <IconBadge icon={item.icon} />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-display text-xl font-semibold text-white">{item.title}</p>
                  {item.badge ? (
                    <span className="rounded-full border border-sky/20 bg-sky/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                {item.copy ? (
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.copy}</p>
                ) : null}
                <div className="mt-4">
                  <List items={item.points} compact icon="arrow" />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ChannelsSlide({ slide }) {
  return (
    <div className="grid flex-1 gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      <Card className="p-7 md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <IconBadge icon="channel" />
          <div>
            <p className="font-display text-2xl font-semibold text-white">Digital Services Execution</p>
            <p className="text-sm text-slate-400">
              Integrated channel stack aligned to ACLAS content buckets.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {slide.channels.map((item) => (
            <Card key={item.title} className="p-5">
              <div className="flex items-center gap-3">
                <IconBadge icon={item.icon} />
                <div>
                  <p className="font-display text-xl font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-slate-400">{item.subtitle}</p>
                </div>
              </div>
              <div className="mt-4">
                <List items={item.points} compact />
              </div>
            </Card>
          ))}
        </div>
      </Card>

      <Card className="p-7 md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <IconBadge icon="media" />
          <div>
            <p className="font-display text-2xl font-semibold text-white">Content System</p>
            <p className="text-sm text-slate-400">
              Reels, testimonials, lab videos, student life, and career guidance.
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          {slide.contentSystem.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4"
            >
              <CircleDashed className="h-4 w-4 text-sky" />
              <p className="text-sm font-medium text-slate-200">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[1.75rem] border border-sky/20 bg-gradient-to-br from-sky/15 to-white/5 p-5">
          <p className="text-sm uppercase tracking-[0.24em] text-sky">Platform Mix</p>
          <p className="mt-3 font-display text-2xl font-bold text-white">
            Instagram, Facebook, YouTube, LinkedIn, Google Search, and WhatsApp
          </p>
        </div>
      </Card>
    </div>
  );
}

function BudgetSlide({ slide }) {
  return (
    <div className="grid flex-1 gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)]">
      <Card className="overflow-hidden p-0">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-px overflow-hidden rounded-[2rem] bg-white/10">
          {["Month / Phase", "Meta Ads", "Google / Total"].map((heading) => (
            <div key={heading} className="bg-slate-950/70 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{heading}</p>
            </div>
          ))}
          {slide.rows.map((row) => (
            <Fragment key={row.month}>
              <div className="bg-white/5 px-5 py-5 text-sm leading-relaxed text-slate-200">
                <p className="font-display text-lg font-semibold text-white">{row.month}</p>
                <p className="mt-1 text-slate-400">{row.focus}</p>
              </div>
              <div className="bg-white/5 px-5 py-5 text-sm font-medium text-slate-200">{row.meta}</div>
              <div className="bg-white/5 px-5 py-5 text-sm font-medium text-slate-200">
                <p>{row.google}</p>
                <p className="mt-2 font-display text-lg text-white">{row.total}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </Card>

      <div className="grid gap-5">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <IconBadge icon="budget" />
            <div>
              <p className="font-display text-2xl font-semibold text-white">Spend Summary</p>
              <p className="text-sm text-slate-400">Monthly ad spend estimate from the proposal.</p>
            </div>
          </div>
          <div className="mt-5 rounded-[1.75rem] border border-sky/20 bg-gradient-to-br from-sky/15 to-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-sky">Total ad estimate</p>
            <p className="mt-2 font-display text-4xl font-bold text-white">{slide.summary.total}</p>
          </div>
        </Card>

        <Card className="p-6">
          <List items={slide.summary.notes} />
        </Card>
      </div>
    </div>
  );
}

function CollaborationSlide({ slide }) {
  return (
    <div className="grid flex-1 gap-6 lg:grid-cols-2">
      {slide.columns.map((column) => (
        <Card key={column.title} className="p-7 md:p-8">
          <div className="flex items-center gap-3">
            <IconBadge icon={column.icon} />
            <div>
              <p className="font-display text-2xl font-semibold text-white">{column.title}</p>
              <p className="text-sm text-slate-400">{column.subtitle}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            {column.roles.map((role) => (
              <div
                key={role.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5"
              >
                <p className="font-display text-lg font-semibold text-white">{role.title}</p>
                <div className="mt-4">
                  <List items={role.points} compact />
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

function OfflineSlide({ slide }) {
  return (
    <div className="grid flex-1 gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <Card className="p-7 md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <IconBadge icon="offline" />
          <div>
            <p className="font-display text-2xl font-semibold text-white">Offline Marketing Priorities</p>
            <p className="text-sm text-slate-400">
              Digital leads still convert better when campus perception is strong.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {slide.priorities.map((group) => (
            <Card key={group.title} className="p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="font-display text-xl font-semibold text-white">{group.title}</p>
                <span className="rounded-full border border-sky/20 bg-sky/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky">
                  {group.level}
                </span>
              </div>
              <div className="mt-4">
                <List items={group.points} compact />
              </div>
            </Card>
          ))}
        </div>
      </Card>

      <div className="grid gap-5">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <IconBadge icon="tv" />
            <div>
              <p className="font-display text-2xl font-semibold text-white">MediaOne Collaboration</p>
              <p className="text-sm text-slate-400">Authority-building add-on from the proposal.</p>
            </div>
          </div>
          <div className="mt-5 space-y-4">
            {slide.mediaOne.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5"
              >
                <p className="font-display text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.copy}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-sky">Why this matters</p>
          <p className="mt-3 font-display text-2xl font-semibold text-white">
            Students visit before deciding, so brand perception and campus quality influence conversion.
          </p>
        </Card>
      </div>
    </div>
  );
}

function RequirementsSlide({ slide }) {
  return (
    <div className="grid flex-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {slide.groups.map((group) => (
        <Card key={group.title} className="p-5 md:p-6">
          <div className="flex items-center gap-3">
            <IconBadge icon={group.icon} className="h-11 w-11 rounded-xl" />
            <div>
              <p className="font-display text-xl font-semibold text-white">{group.title}</p>
              <p className="text-sm text-slate-400">{group.subtitle}</p>
            </div>
          </div>
          <div className="mt-4">
            <List items={group.points} compact />
          </div>
        </Card>
      ))}
    </div>
  );
}

function OutcomeSlide({ slide }) {
  return (
    <div className="grid flex-1 gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div className="grid gap-4 md:grid-cols-3">
        {slide.metrics.map((item) => (
          <Card key={item.label} className="flex min-h-[220px] flex-col justify-between p-6">
            <div className="flex items-center gap-3">
              <IconBadge icon={item.icon} />
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
            </div>
            <div>
              <p className="font-display text-5xl font-extrabold text-white">{item.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.copy}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="flex flex-col justify-between p-7 md:p-8">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-sky">Expected outcome</p>
          <p className="mt-4 font-display text-4xl font-bold leading-tight text-white">
            High-volume inquiry generation backed by stronger conversion potential.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            The proposal targets a monthly pipeline where digital visibility, WhatsApp follow-up,
            and campus visits all work together to improve admissions across programs.
          </p>
        </div>
        <div className="mt-6 rounded-[2rem] border border-sky/20 bg-gradient-to-br from-sky/15 to-white/5 p-6">
          <p className="font-display text-2xl font-semibold text-white">
            Focused strength: Paramedical program admissions
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            The plan specifically highlights 100 students for paramedicals while still driving
            all-course admissions.
          </p>
        </div>
      </Card>
    </div>
  );
}

function FinalBudgetSlide({ slide }) {
  return (
    <div className="grid flex-1 gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)]">
      <div className="grid gap-4 md:grid-cols-2">
        {slide.items.map((item) => (
          <Card key={item.title} className="p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.title}</p>
            <p className="mt-3 font-display text-3xl font-bold text-white">{item.value}</p>
          </Card>
        ))}
      </div>

      <Card className="flex flex-col justify-between p-7 md:p-8">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-sky">Campaign total</p>
          <p className="mt-3 font-display text-5xl font-extrabold text-white">{slide.total}</p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Designed to maximize admissions through a combination of paid performance marketing,
            content-driven engagement, local visibility, and operational follow-up.
          </p>
        </div>
        <div className="mt-6 rounded-[2rem] border border-sky/20 bg-gradient-to-br from-sky/15 to-white/5 p-6">
          <p className="font-display text-2xl font-bold text-white">Target benchmark</p>
          <p className="mt-2 text-lg font-semibold text-sky">INR 5 Lakhs</p>
        </div>
      </Card>
    </div>
  );
}

function PositioningSlide() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="relative w-full max-w-5xl overflow-hidden px-8 py-12 text-center md:px-14 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-sky/12 via-transparent to-blue-500/10" />
        <div className="relative">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-sky/20 bg-sky/10 text-sky shadow-glow">
            <HeartPulse className="h-7 w-7" />
          </div>
          <p className="text-sm uppercase tracking-[0.28em] text-sky">Final Strategic Positioning</p>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl xl:text-[4.35rem]">
            &ldquo;The college where students train inside real hospitals and build real careers.&rdquo;
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            This positioning line captures the strongest differentiator in the proposal:
            genuine hospital exposure translated into clear career outcomes.
          </p>
        </div>
      </Card>
    </div>
  );
}

function ContactSlide({ slide }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1">
      <Card className="flex flex-col justify-between p-7 md:p-10">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-sky">Let&apos;s connect</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Ready to present, review, and move this strategy live.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Use the direct contact options below for discussion, WhatsApp follow-up, or
            proposal confirmation.
          </p>
        </div>

        <div className="mt-8 grid gap-4">
          {slide.links.map((item) => {
            const Icon = iconMap[item.icon] || Phone;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="group flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-5 transition hover:border-sky/35 hover:bg-sky/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky/20 bg-sky/10 text-sky">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                    <p className="font-display text-xl font-semibold text-white">{item.value}</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:text-sky" />
              </a>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

export default Slide;
