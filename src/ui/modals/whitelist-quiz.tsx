import { useState } from 'react';

import { RadioGroup } from '@headlessui/react';

import { useNftQuiz } from '../../hooks';
import { classNames } from '../../utils/helpers';
import { Button, Stepper } from '../components';
import { ModalBase } from './base';

export const WhitelistQuiz = () => {
  const [open, setOpen] = useState(false);
  const { quiz, current, setCurrent, getCurrentIndex, next } = useNftQuiz(open);

  return (
    <>
      <Button type="cta" onClick={() => setOpen(true)}>
        Earn Whitelist
      </Button>
      <ModalBase
        open={open}
        setOpen={setOpen}
        title="Test Your Knowledge"
        cardClass="justify-between gap-4"
        headerClass="mb-0"
      >
        <div className="flex flex-col gap-4 w-full md:px-1 justify-between h-full">
          <span className="lg:text-lg">
            {quiz[getCurrentIndex()]?.question}
          </span>
          <RadioGroup value={current} onChange={setCurrent} className="mt-2">
            <RadioGroup.Label className="sr-only">
              Choose a memory option
            </RadioGroup.Label>
            <div className="grid grid-cols-2 sm:grid-cols-4 auto-cols-fr gap-3">
              {quiz[getCurrentIndex()]?.answers.map((option, i) => (
                <RadioGroup.Option
                  key={i}
                  value={option}
                  className={({ active, checked }) =>
                    classNames(
                      active ? 'ring-2 ring-brand-100 ring-offset-2' : '',
                      checked
                        ? 'bg-gradient-to-r from-[#286638] to-brand-100 text-neutral-100'
                        : 'ring-1 ring-inset text-gray-900 hover:bg-neutral-300 cursor-pointer',
                      'flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1 transition duration-200 bg-neutral-100'
                    )
                  }
                  onClick={next}
                >
                  <RadioGroup.Label as="span">{option}</RadioGroup.Label>
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
        <Stepper steps={quiz.map((q) => ({ ...q, name: q.question }))} />
      </ModalBase>
    </>
  );
};
