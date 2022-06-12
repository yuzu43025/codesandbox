//関数が正常に実行されているか確認
// const onClickAdd = () => {
//   alert();
// };

//add-buttonにクリックイベントを付与
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//INPUTに入力した内容を変数に代入
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  //一度値を取得した後は、INPUTの中身を初期化する
  document.getElementById("add-text").value = "";

  //未完了タスクを完了を関数化：詳細は下記に記載
  createOngoingList(inputText);
};

//未完了リストから指定の要素を削除を関数化して、使い回し
const deleteFromOngoingList = (target) => {
  document.getElementById("ongoing-list").removeChild(target);
};

//未完了リストに追加する関数
const createOngoingList = (text) => {
  //javascriptでDOM作成

  //まずはリストタグを生成
  //document.cleateElement(タグ名)でJSでHTML要素作成
  const li = document.createElement("li");
  //作成したliタグにクラスも付与
  li.className = "list-row";

  //次にタスクの名前用ののpタグ生成
  const p = document.createElement("p");
  //作成したpタグに上記の変数で取得したテキストを代入
  p.innerText = text;

  //button（完了）作成
  const doneButton = document.createElement("button");
  doneButton.innerText = "DONE";
  // console.log(doneButton);
  doneButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（li）を未完了リストから削除
    deleteFromOngoingList(doneButton.parentNode);
    // const deleteTarget = completeButton.parentNode;
    // document.getElementById("ongoing-list").removeChild(deleteTarget);

    //完了リストに追加する
    const addTarget = doneButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //liタグ以下を初期化
    addTarget.textContent = null;

    //pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    //resetボタンの生成
    const resetButton = document.createElement("button");
    resetButton.innerText = "RESET";
    resetButton.addEventListener("click", () => {
      //押されたresetボタンの親タグを完了リストから削除
      const deleteTarget = resetButton.parentNode;
      document.getElementById("done-list").removeChild(deleteTarget);

      //未完了リストにタスクを追加
      //テキスト取得
      const text = resetButton.parentNode.firstElementChild.innerText;
      createOngoingList(text);
    });

    //liタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(resetButton);

    //完了リストに追加
    document.getElementById("done-list").appendChild(addTarget);
    /**
     * 自分で挑戦した記述
     *     const p = document.createElement("p");
     *     p.innerText = inputText;
     *     document.getElementById("done-list").appendChild(li);
     */
  });

  //button（削除）作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "DELETE";
  // console.log(deleteButton);
  deleteButton.addEventListener("click", () => {
    // alert("DELETE");
    deleteFromOngoingList(deleteButton.parentNode);
    //押された削除ボタンの親タグ（li）を未完了リストから削除
    // const deleteTarget = deleteButton.parentNode;
    // // console.log(deleteTarget);
    // document.getElementById("ongoing-list").removeChild(deleteTarget);
  });

  //liタグの下にpタグを配置する
  li.appendChild(p);
  li.appendChild(doneButton);
  li.appendChild(deleteButton);
  // console.log(li);

  //未完了リストにliを追加
  document.getElementById("ongoing-list").appendChild(li);
};
