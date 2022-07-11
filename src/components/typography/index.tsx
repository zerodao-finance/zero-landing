type ITypographyProps = {
  text: string;
  style?: string;
};

// General
const SectionTitle = (props: ITypographyProps) => (
  <h1 className="text-2xl uppercase font-bold mb-10">{props.text}</h1>
);

// About Section
const AboutSubTitle = (props: ITypographyProps) => (
  <h4 className="text-sm uppercase font-bold text-gray-100">{props.text}</h4>
);

const AboutTitle = (props: ITypographyProps) => (
  <h4 className={`text-xl font-bold mb-2 ${props.style && props.style}`}>
    {props.text}
  </h4>
);

const AboutParagraph = (props: ITypographyProps) => <p>{props.text}</p>;

export { SectionTitle, AboutSubTitle, AboutTitle, AboutParagraph };
