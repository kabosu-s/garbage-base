__NUXT_JSONP__("/bbuoqcy6mc", (function(a){return {data:[{id:"bbuoqcy6mc",createdAt:"2021-08-15T04:49:21.317Z",updatedAt:a,publishedAt:"2021-08-15T09:33:36.926Z",revisedAt:a,title:"制作時メモ【いまさらMPA化！】",mainimage:{url:"https:\u002F\u002Fimages.microcms-assets.io\u002Fassets\u002F30dedbc29bbf472a8bd932f7df5e77d6\u002Feeac577d4a4541458a68d4fa8714c847\u002Fvue_back.jpg",height:600,width:1200},body:"\u003Chtml\u003E\u003Chead\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cp\u003ESPA（シングルページアプリケーション）だと、色々作りたい時に手間だったので\u003Cbr\u003EMPA（マルチページアプリケーション）にしてみます！\u003Cbr\u003E\u003Cbr\u003Eこちらをめちゃめちゃ参考にしました。\u003Cbr\u003E\u003Ca href=\"https:\u002F\u002Fqiita.com\u002Fkamicop\u002Fitems\u002Fc5c0917ed226234ee288\" target=\"_blank\" rel=\"noopener noreferrer\"\u003EVue CLI 3でSPAではなくMPA(複数エントリーポイント)のプロジェクトを作成する\u003C\u002Fa\u003E\u003Cbr\u003E\u003Cbr\u003Eまあ、上のページからほぼなにもかえてないのですが…\u003Cbr\u003E気をつけたのは…\u003Cbr\u003E\u003Cbr\u003Eモジュールを追加すること\u003Cbr\u003E\u003Cbr\u003Eターミナル。プロジェクトルート直下で\u003C\u002Fp\u003E\u003Cpre\u003E\u003Ccode class=\"hljs\"\u003E$ npm install --\u003Cspan class=\"hljs-keyword\"\u003Esave\u003C\u002Fspan\u003E-dev html-webpack-\u003Cspan class=\"hljs-keyword\"\u003Eplugin\u003C\u002Fspan\u003E preload-webpack-\u003Cspan class=\"hljs-keyword\"\u003Eplugin\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003E\u003Cbr\u003Eディレクトリの構成はこんな感じ\u003C\u002Fp\u003E\u003Cpre\u003E\u003Ccode class=\"hljs\"\u003E└── \u003Cspan class=\"hljs-selector-tag\"\u003Esrc\u003C\u002Fspan\u003E\n&nbsp; &nbsp; ├── \u003Cspan class=\"hljs-selector-tag\"\u003Eassets\u003C\u002Fspan\u003E\n&nbsp; &nbsp; │&nbsp; &nbsp;└── \u003Cspan class=\"hljs-selector-tag\"\u003Elogo\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-selector-class\"\u003E.png\u003C\u002Fspan\u003E\n&nbsp; &nbsp; ├── \u003Cspan class=\"hljs-selector-tag\"\u003Ecomponents\u003C\u002Fspan\u003E\n&nbsp; &nbsp; │&nbsp; &nbsp;└── \u003Cspan class=\"hljs-selector-tag\"\u003EFooter\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-selector-class\"\u003E.vue\u003C\u002Fspan\u003E\n&nbsp; &nbsp; │&nbsp; &nbsp;└── \u003Cspan class=\"hljs-selector-tag\"\u003EHeader\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-selector-class\"\u003E.vue\u003C\u002Fspan\u003E\n&nbsp; &nbsp; ├── \u003Cspan class=\"hljs-selector-tag\"\u003Eentry-point\u003C\u002Fspan\u003E\n&nbsp; &nbsp; │&nbsp; &nbsp;└── \u003Cspan class=\"hljs-selector-tag\"\u003Elab\u003C\u002Fspan\u003E\n&nbsp; &nbsp; │&nbsp; &nbsp; &nbsp; &nbsp;└── \u003Cspan class=\"hljs-selector-tag\"\u003ELab\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-selector-class\"\u003E.vue\u003C\u002Fspan\u003E\n&nbsp; &nbsp; │&nbsp; &nbsp; &nbsp; &nbsp;└── \u003Cspan class=\"hljs-selector-tag\"\u003Emain\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-selector-class\"\u003E.js\u003C\u002Fspan\u003E\n&nbsp; &nbsp; │&nbsp; &nbsp;└── \u003Cspan class=\"hljs-selector-tag\"\u003Etop\u003C\u002Fspan\u003E\n&nbsp; &nbsp; │&nbsp; &nbsp; &nbsp; &nbsp;└── \u003Cspan class=\"hljs-selector-tag\"\u003ETop\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-selector-class\"\u003E.vue\u003C\u002Fspan\u003E\n&nbsp; &nbsp; │&nbsp; &nbsp; &nbsp; &nbsp;└── \u003Cspan class=\"hljs-selector-tag\"\u003Emain\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-selector-class\"\u003E.js\u003C\u002Fspan\u003E\n&nbsp; &nbsp; ├── \u003Cspan class=\"hljs-selector-tag\"\u003Emain\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-selector-class\"\u003E.js\u003C\u002Fspan\u003E\n&nbsp; &nbsp; ├── \u003Cspan class=\"hljs-selector-tag\"\u003Eroutersr\u003C\u002Fspan\u003E\n&nbsp; &nbsp; │&nbsp; &nbsp;└── \u003Cspan class=\"hljs-selector-tag\"\u003Eindex\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-selector-class\"\u003E.js\u003C\u002Fspan\u003E\n&nbsp; &nbsp; └── \u003Cspan class=\"hljs-selector-tag\"\u003Eviews\u003C\u002Fspan\u003E\n&nbsp; &nbsp; &nbsp; &nbsp; ├── \u003Cspan class=\"hljs-selector-tag\"\u003EAbout\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-selector-class\"\u003E.vue\u003C\u002Fspan\u003E\n&nbsp; &nbsp; &nbsp; &nbsp; └── \u003Cspan class=\"hljs-selector-tag\"\u003EHome\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-selector-class\"\u003E.vue\u003C\u002Fspan\u003E\n└──\u003Cspan class=\"hljs-selector-tag\"\u003Evue\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-selector-class\"\u003E.config\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-selector-class\"\u003E.js\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003E\u003Cbr\u003Evue.config.js\u003C\u002Fp\u003E\u003Cpre\u003E\u003Ccode class=\"hljs\"\u003Emodule.exports = {\n  pages: {\n    top: {\n      \u003Cspan class=\"hljs-keyword\"\u003Eentry\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-symbol\"\u003E'src\u003C\u002Fspan\u003E\u002F\u003Cspan class=\"hljs-keyword\"\u003Eentry\u003C\u002Fspan\u003E-point\u002Ftop\u002Fmain.js', \n      template: \u003Cspan class=\"hljs-symbol\"\u003E'public\u003C\u002Fspan\u003E\u002Findex.html', \n      filename: \u003Cspan class=\"hljs-symbol\"\u003E'index.html\u003C\u002Fspan\u003E', \n    },\n    lab: {\n      \u003Cspan class=\"hljs-keyword\"\u003Eentry\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-symbol\"\u003E'src\u003C\u002Fspan\u003E\u002F\u003Cspan class=\"hljs-keyword\"\u003Eentry\u003C\u002Fspan\u003E-point\u002Flab\u002Fmain.js',\n      title: \u003Cspan class=\"hljs-symbol\"\u003E'LAB\u003C\u002Fspan\u003E', \u002F\u002Frouterのmetaを参照しない\n      template: \u003Cspan class=\"hljs-symbol\"\u003E'public\u003C\u002Fspan\u003E\u002Flab.html',\n      filename: \u003Cspan class=\"hljs-symbol\"\u003E'lab.html\u003C\u002Fspan\u003E',\n    },\n  },\n};\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003E\u003Cbr\u003Erouterのパス\u003Cbr\u003E\u002Fsrc\u002Fentry-point\u002Ftop\u002Fmain.js\u003C\u002Fp\u003E\u003Cpre\u003E\u003Ccode class=\"hljs\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Eimport\u003C\u002Fspan\u003E { createApp } \u003Cspan class=\"hljs-keyword\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E'vue'\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-keyword\"\u003Eimport\u003C\u002Fspan\u003E Top \u003Cspan class=\"hljs-keyword\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E'.\u002FTop.vue'\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-keyword\"\u003Eimport\u003C\u002Fspan\u003E router \u003Cspan class=\"hljs-keyword\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E'@\u002Frouter'\u003C\u002Fspan\u003E\n\ncreateApp(Top).use(router).mount(\u003Cspan class=\"hljs-string\"\u003E'#app'\u003C\u002Fspan\u003E)\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003E\u003Cbr\u003E\u003Cbr\u003Eデプロイ先のnetlifyでのリダイレクト設定\u003Cbr\u003Eリダイレクトの話はこちらを参照にしました。\u003Cbr\u003E\u003Cbr\u003E\u003Ca href=\"https:\u002F\u002Fblog.microcms.io\u002Fnetlify-redirect\u002F\" target=\"_blank\" rel=\"noopener noreferrer\"\u003ENetlifyでリダイレクトを実装する\u003C\u002Fa\u003E\u003Cbr\u003E\u003Cbr\u003E_redirects\u003C\u002Fp\u003E\u003Cpre\u003E\u003Ccode class=\"hljs\"\u003E\u003Cspan class=\"hljs-comment\"\u003E#labにアクセスされた時にリダイレクト\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-string\"\u003E\u002Flab\u003C\u002Fspan\u003E&nbsp; &nbsp; \u003Cspan class=\"hljs-string\"\u003E\u002Flab.html\u003C\u002Fspan\u003E&nbsp; &nbsp;200\n\u003Cspan class=\"hljs-comment\"\u003E#他は全部indexにとばす\u003C\u002Fspan\u003E\n\u002F*&nbsp; &nbsp; \u003Cspan class=\"hljs-string\"\u003E\u002Findex.html\u003C\u002Fspan\u003E&nbsp; &nbsp;200\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003E\u003Cbr\u003E\u003Ca href=\"https:\u002F\u002Fgarbage-base.netlify.app\u002Flab\" target=\"_blank\" rel=\"noopener noreferrer\"\u003Ehttps:\u002F\u002Fgarbage-base.netlify.app\u002Flab\u003C\u002Fa\u003E\u003Cbr\u003E\u003Cbr\u003Eにアクセスすることができました！\u003Cbr\u003Eあ、いまのとこaと表示されてるだけです\u003Cbr\u003E\u003Cbr\u003Eつづきます\u003C\u002Fp\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E",tag:["WEB"]}],fetch:{},mutations:void 0}}("2021-08-18T11:48:23.762Z")));