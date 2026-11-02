export const getBasename = () => {
  const { hostname, pathname } = window.location;
  if (hostname.includes("react.customdev.solutions")) {
    const segment = pathname.split("/").filter(Boolean)[0];
    return segment ? `/${segment}` : "";
  }
  return "";
};

export const ImageUrl = (image: string) => {
  return `${getBasename()}/images/${image}`;
};
