module.exports = {
  overrides: [
    {
      presets: [
        [
          "@babel/preset-env",
          { useBuiltIns: "usage", corejs: 3, targets: "defaults" },
        ],
        "@babel/preset-react",
      ],
      plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-react-jsx",
      ],
    },
  ],
};
