export type IStepperItemProps = {
  name: string;
  status: 'complete' | 'current' | 'upcoming';
};

type IStepperProps = {
  steps: IStepperItemProps[];
};

export function Stepper({ steps }: IStepperProps) {
  return (
    <nav
      className="flex flex-col gap-3 items-center justify-center"
      aria-label="Progress"
    >
      <p className="text-sm font-light">
        Question {steps.findIndex((step) => step.status === 'current') + 1} of{' '}
        {steps.length}
      </p>
      <ol role="list" className="flex items-center space-x-2 sm:space-x-3">
        {steps.map((step) => (
          <li key={step.name}>
            {step.status === 'complete' ? (
              <button className="block h-2.5 w-2.5 p-1 rounded-full bg-gradient-to-r from-[#286638] to-brand-100 cursor-default">
                <span className="sr-only">{step.name}</span>
              </button>
            ) : step.status === 'current' ? (
              <button
                className="relative flex items-center justify-center p-1 cursor-default"
                aria-current="step"
              >
                <span className="absolute flex h-5 w-5 p-px" aria-hidden="true">
                  <span className="h-full w-full rounded-full bg-green-200" />
                </span>
                <span
                  className="relative block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#286638] to-brand-100"
                  aria-hidden="true"
                />
                <span className="sr-only">{step.name}</span>
              </button>
            ) : (
              <button className="block h-2.5 w-2.5 rounded-full bg-gray-200 cursor-default p-1">
                <span className="sr-only">{step.name}</span>
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
