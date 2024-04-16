import { Helmet } from "react-helmet";
import logoImg from "assets/img/logo.png";

interface Props {
  title?: string;
  description?: string;
  path?: string;
}

// TODO: Explore more meta data options

export const addMetaData = ({
  title = "",
  description = "",
  path = "",
}: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logoImg} />
      <meta property="og:site_name" content="Deka Farms" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${process.env.REACT_APP_BASE_URL}/${path}`}
      />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logoImg} />
    </Helmet>
  );
};
