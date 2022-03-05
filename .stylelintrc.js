module.exports = {
  processors: [],
  plugins: [],
  extends: "stylelint-config-standard", // 这是官方推荐的方式
  rules: {
    "at-rule-empty-line-before": "always"|"never", // 要求或禁止在@规则之前的空行
    "at-rule-name-case": "lower"|"upper", // 指定@规则名的大小写
    "block-no-empty": true, // 禁止空块
  }
}