type ITypographyProps = {
  text: string;
};

// General
const SectionTitle = (props: ITypographyProps) => (
  <h1 className="text-xl uppercase font-bold mb-10">{props.text}</h1>
);

// About Section
const AboutSubTitle = (props: ITypographyProps) => (
  <h4 className="text-sm uppercase font-bold">{props.text}</h4>
);

const AboutTitle = (props: ITypographyProps) => (
  <h4 className="text-lg font-bold">{props.text}</h4>
);

const AboutParagraph = (props: ITypographyProps) => <p>{props.text}</p>;

export { SectionTitle, AboutSubTitle, AboutTitle, AboutParagraph };