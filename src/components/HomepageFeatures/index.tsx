import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Centralizace a sjednocení",
    Svg: require("@site/static/img/frame2.svg").default,
    description: (
      <>
        S Team assistant můžete řídit různé procesy v jediném prostředí. To
        znamená, že nemusíte přepínat mezi různými nástroji nebo aplikacemi. Náš
        integrovaný přístup usnadňuje sledování a řízení všech vašich operací na
        jednom místě.
      </>
    ),
  },
  {
    title: "Flexibilita a přizpůsobení",
    Svg: require("@site/static/img/frame1.svg").default,
    description: (
      <>
        Chápeme, že každá společnost má odlišné potřeby. Proto nabízíme
        flexibilní řešení a možnost přizpůsobení našeho produktu, aby odpovídal
        konkrétním požadavkům a procesům zákazníků.
      </>
    ),
  },
  {
    title: "Kompatibilita na všech zařízeních",
    Svg: require("@site/static/img/frame3.svg").default,
    description: (
      <>
        Team assistant podporuje všechna zařízení a prohlížeče – nepotřebujete
        instalovat další aplikace k tomu, abyste řešili vaši agendu odkudkoliv.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
