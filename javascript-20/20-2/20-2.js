// Vueオブジェクトの新たなインスタンスの初期値
let initApp = {
  el:'#app',          // 関連付けるDOM要素
  data : {            // データ
    msg:'おはよう'
  }
};

// Vueオブジェクトの新たなインスタンスを生成
let app = new Vue(initApp);
