type ITypographyProps = {
  text: string;
  style?: string;
  strong?: boolean;
  center?: boolean;
  big?: boolean;
};

// General
const SectionTitle = (props: ITypographyProps) => (
  <h2 className="text-2xl uppercase font-bold mb-5 lg:mb-10">{props.text}</h2>
);

// About Section
const AboutSubTitle = (props: ITypographyProps) => (
  <h4 className="text-sm uppercase font-bold text-gray-100 mt-5 lg:mt-0">
    {props.text}
  </h4>
);

const AboutTitle = (props: ITypographyProps) => (
  <h3 className={`text-xl font-bold mb-2 ${props.style && props.style}`}>
    {props.text}
  </h3>
);

const AboutParagraph = (props: ITypographyProps) => (
  <p
    className={`${props.strong && 'font-bold text-lg'} ${
      props.center && 'text-center'
    } ${props.big && 'text-lg'}`}
  >
    {props.text}
  </p>
);

export { SectionTitle, AboutSubTitle, AboutTitle, AboutParagraph };
