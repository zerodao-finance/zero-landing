type ITypographyProps = {
  text: string;
  style?: string;
  strong?: boolean;
  center?: boolean;
  big?: boolean;
};

// About Section
const AboutSubTitle = (props: ITypographyProps) => (
  <h4 className="text-sm uppercase font-bold text-gray-100 mt-5 lg:mt-0">
    {props.text}
  </h4>
);

const AboutTitle = (props: ITypographyProps) => (
  <h3
    className={`text-xl lg:text-2xl font-bold mb-2 ${
      props.style && props.style
    }`}
  >
    {props.text}
  </h3>
);

const AboutParagraph = (props: ITypographyProps) => (
  <p
    className={`${props.strong && 'font-bold'} ${
      props.center && 'text-center'
    } ${props.big && '!text-lg lg:!text-xl'} text-md lg:text-lg`}
  >
    {props.text}
  </p>
);

export { AboutSubTitle, AboutTitle, AboutParagraph };
