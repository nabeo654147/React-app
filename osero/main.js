// let turn = 0;
// let banArr = new Array(8);
// for (let i = 0; i < banArr.length; i++) {
//     banArr[i] = new Array(8);
// };

// const field = document.getElementById('field');

// banNew();
// banInit();

// for (let x = 0; x < 8; x++) {
//     for (let y = 0; y < 8; y++)
//         let selectCell = ban.rows[x].cells[y];
//         selectCell.onclick = function () {
//         if (banArr[this.parenNode.rowIndex, this.cellIndex] == 0) {
//             if (checkReverse(this.parentNode.rowIndex, this.cellIndex) > 0) {
//                 banSet()
//                 chengTurn()
//             }
//         }
//     }
// }

// function banNew() {
//     for (let x = 0; x < 8; x++) {
//         let tr = document.createElement('tr')
//         field.appendChild(tr)
//         for (let y = 0; y < 8; y++) {
//             let td = document.createElement('td')
//             tr.appendChild(td)
//         }
//     }
// }

// function banInit() {
//     for (let x = 0; x < 8; x++) {
//         for (let y = 0; y < 8; y++) {
//             banArr[x][y] = 0;
//         }
//     }
//     banArr[3][3] = -1;
//     banArr[4][3] = 1;
//     banArr[3][4] = 1;
//     banArr[4][4] = -1;
//     banSet();
// }

// turn = 0;
// chengTurn();

// function banSet() {
//     let stone = '';
//     for (let x = 0; x < 8; x++) {
//         for (let y = 0; y < 8; y++) {
//             switch (banArr[x][y]) {
//                 case 0:
//                     stone = ''
//                     break;
//                 case -1:
//                     stone = '◯'
//                     break;
//                 case 1:
//                     stone = '●'
//                     break;
//             }
//             // ban.rows[x].cells[y].innerText = stone;
//         }
//     }
//     return true;
// }

// function chengTurn() {
//     let turnMsg = document.getElementById('viewTarn')
//     if (turn === 0) {
//         turn = 1
//         turn = 1
//         turnMsg.textContent = '黒の番です'
//         return;
//     }
//     //ターンを変更
//     turn = turn * -1
//     //ターンを交代して、置けるところがあるかを確認する
//     //現状の配置をバックアップ
//     var banBak = new Array(8)
//     var checkReverseCnt = 0
//     for (var i = 0; i < banArr.length; i++) {
//         banBak[i] = new Array(8)
//     }
//     for (var x = 0; x < 8; x++) {
//         for (vary = 0; y < 8; y++) {
//             banBak[x][y] = banArr[x][y]
//         }
//     }
//     var whiteCnt = 0
//     var blackCnt = 0
//     for (var x = 0; x < 8; x++) {
//         for (var y = 0; y < 8; y++) {
//             //空白マスのみ置けるのでチェック
//             //それ以外は石の数の計算
//             switch (banArr[x][y]) {
//                 case 0:
//                     checkReverseCnt = checkReverseCnt + checkReverse(x, y)
//                     //バックアップから元に戻す
//                     for (var i = 0; i < 8; ii++) {
//                         for (var ii = 0; ii < 8; ii++) {
//                             banArr[i][ii] = banBak[i][ii]
//                         }
//                     }
//                     break;
//                 case -1:
//                     whiteCnt++
//                     break
//                 case 1:
//                     blackCnt++
//                     break
//             }
//         }
//     }
//     //白と黒の合計が8*8=64の場合は終了
//     if (whiteCnt + blackCnt == 64 || whiteCnt == 0 || blackCnt == 0) {
//         if (whiteCnt == blackCnt) {
//             alert("引き分けです")
//         } else if (whiteCnt > blackCnt) {
//             alert("勝負は黒：" + blackCnt + "対、白：" + whiteCnt + "で白の勝ち")
//         } else {
//             alert("勝負は黒:" + blackCnt + "対、白：" + whiteCnt + "で黒の勝ちです")
//         }
//     } else {
//         //置ける場所がない場合はターンを相手に戻す
//         if (checkReverseCnt == 0) {
//             switch (turn) {
//                 case -1:
//                     alert("白のおける場所がありません。続けて黒の番になります")
//                     turn = turn * -1
//                     break;
//                 case 1:
//                     alert("黒のおける場所がありません。続けて白の番となります。")
//                     turn = turn * -1
//                     break;
//             }
//         }
//     }
//     //ターンを表示
//     switch (turn) {
//         case -1:
//             tarnMsg.textContent = "白の番です";
//             break;
//         case 1:
//             tarnMsg.textContent = "黒の番です";
//             break;
//     }
// }