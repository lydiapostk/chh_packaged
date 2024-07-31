module.exports = () => {
    const rewrites = () => {
      return [
        {
          source: "/database/:path*",
          // TODO: replace the URL with actual backend URL
          destination: "http://127.0.0.1:5000/:path*",
        },
      ];
    };
    return {
      output: "standalone",
      rewrites,
    };
  };