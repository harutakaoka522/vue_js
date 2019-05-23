new Vue({
  // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
  el: '#app',
  // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
  data: {

    name: null,
    cource: null,
    acceptance_period: null,
    //初期の入力値は空白にしておく
    default_last_id: 0,
    //最初のIDを1に指定
    students: []
    //生徒の配列を生成
 
  },
  // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
  methods: {
    addStudent: function() {
      if (!this.name || !this.cource || !this.acceptance_period) 
      //もし未入力の場合、反映が実行されないようにするIF文を作成
      {
        return;
      }

      this.students.push({
        id: this.default_last_id += 1,
        name: this.name,
        cource: this.cource,
        acceptance_period: this.acceptance_period });
      //クリックした際に情報が反映される

      //登録毎にIDが加算される
        // この function() { } の中にaddStudentメソッド
        // （入力欄に入力された値と、ID値（最後に登録されたID値+1の値）が新たに出現する機能）の処理を書く
    }
  }
})
