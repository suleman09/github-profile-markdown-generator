@@ -137,6 +137,7 @@ const categorizedSkills = {
      "vagrant",
      "circleci",
      "travisci",
      "ansible",
    ],
  },

@@ -311,6 +312,7 @@ const icons = {
  spring: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
  swift:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
  ansible: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ansible/ansible-original.svg",
  typescript:
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  linux:
@@ -549,6 +551,7 @@ const skillWebsites = {
  realm: "https://realm.io/",
  gatsby: "https://www.gatsbyjs.com/",
  gridsome: "https://gridsome.org/",
  ansible: "https://www.ansible.com/",
  nuxtjs: "https://nuxtjs.org/",
  jekyll: "https://jekyllrb.com/",
  nextjs: "https://nextjs.org/",
  reactnative: "https://reactnative.dev/",
  mariadb: "https://mariadb.org/",
  cockroachdb: "https://www.cockroachlabs.com/product/cockroachdb/",
  objectivec:
    "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
  clojure: "https://clojure.org/",
  haskell: "https://www.haskell.org/",
  svelte: "https://svelte.dev",
  vuetify: "https://vuetifyjs.com/en/",
  pug: "https://pugjs.org",
  mocha: "https://mochajs.org",
  jest: "https://jestjs.io",
  cypress: "https://www.cypress.io",
  selenium: "https://www.selenium.dev",
  puppeteer: "https://github.com/puppeteer/puppeteer",
  karma: "https://karma-runner.github.io/latest/index.html",
  jasmine: "https://jasmine.github.io/",
  gtk: "https://www.gtk.org/",
  qt: "https://www.qt.io/",
  wx_widgets: "https://www.wxwidgets.org/",
  ember: "https://emberjs.com/",
  scikit_learn: "https://scikit-learn.org/",
  quasar: "https://quasar.dev/",
  kibana: "https://www.elastic.co/kibana",
  grafana: "https://grafana.com",
  elasticsearch: "https://www.elastic.co",
  circleci: "https://circleci.com",
  scully: "https://scully.io/",
  sculpin: "https://sculpin.io/",
  // // '11ty': 'https://www.11ty.dev/',
  sapper: "https://sapper.svelte.dev/",
  vuepress: "https://vuepress.vuejs.org/",
  unity: "https://unity.com/",
  unreal: "https://unrealengine.com/",
  hexo: "hexo.io/",
  heroku: "https://heroku.com",
  appwrite: "https://appwrite.io",
  zapier: "https://zapier.com",
  ifttt: "https://ifttt.com/",
  elixir: "https://elixir-lang.org",
  travisci: "https://travis-ci.org",
  apachecordova: "https://cordova.apache.org/",
  sqlite: "https://www.sqlite.org/",
  mssql: "https://www.microsoft.com/en-us/sql-server",
  postman: "https://postman.com",
  erlang: "https://www.erlang.org/",
  nim: "https://nim-lang.org/",
  middleman: "https://middlemanapp.com/",
};
const initialSkillState = {};
const skillsArray = Object.keys(categorizedSkills).map(
  (key) => categorizedSkills[key].skills
);
// eslint-disable-next-line prefer-spread
const skills = [].concat.apply([], skillsArray).sort();
skills.forEach((skill) => {
  initialSkillState[skill] = false;
});
const categories = Object.keys(categorizedSkills);
export {
  initialSkillState,
  icons,
  skills,
  skillWebsites,
  categorizedSkills,
  categories,
};
