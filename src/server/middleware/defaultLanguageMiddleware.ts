const defaultLanguageMiddleware = (req: any, res: any, next: any) => {
  const url = req.originalUrl;
  if (!url.startsWith("/fr") && !url.startsWith("/en")) {
    console.log(url);
    // res.redirect(301, url)
  }

  next();
};

export default defaultLanguageMiddleware;
