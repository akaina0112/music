
window.onload = function() {
  // switchSlide2()関数を実行する例として、ページ読み込み時に実行する
  switchSlide2();
  // JavaScriptでCSSスタイルを適用する場合
  const style = document.createElement('style');
  style.textContent = `
    /* ボタンのスタイル */
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 250px;
      margin: 0 auto;
      padding: .9em 2em;
      border: none;
      border-radius: 25px;
      background-color: #2589d0;
      color: #fff;
      font-weight: 600;
      font-size: 1em;
      cursor: pointer; /* ホバー時のカーソルをポインターにする */
      transition: background-color 0.3s, transform 0.3s; /* ホバー時のトランジションを設定 */
      background-color: #1c6ea4; /* ホバー時の背景色 */
      animation: anime-button-38 .3s linear infinite; /* ホバー時のアニメーションを適用 */
    }

    .button:hover {
      background-color: #1c6ea4; /* ホバー時の背景色 */
      animation: anime-button-38 .3s linear infinite; /* ホバー時のアニメーションを適用 */
    }

    @keyframes anime-button-38 {
      20% {
        transform: translate(-2px, 2px);
      }
      40% {
        transform: translate(-2px, -2px);
      }
      60% {
        transform: translate(2px, 2px);
      }
      80% {
        transform: translate(2px, -2px);
      }
    }

    /* 光るテキストのスタイル */
    .glowing-text {
      color: #fff;
      text-shadow: 0 0 10px #00f, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 70px #0ff, 0 0 80px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;
    }
    *{text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);}    /* 表示用のクラス */
    .show {
      display: block;
      top: 20px;
      opacity: 1;
    }#info{
      display: none;
    }

    /*モーダルの横幅を変更したい場合*/
    .modaal-container{
        max-width: 600px;
    }

    /*モーダルのボタンの色を変更したい場合*/
    .modaal-close:after, 
    .modaal-close:before{
      background:#ccc;  
    }

    .modaal-close:focus:after,
    .modaal-close:focus:before,
    .modaal-close:hover:after,
    .modaal-close:hover:before{
      background:#666;
    }
  `;

  // head要素にスタイルを追加する
  document.head.appendChild(style);


  function switchSlide2() {
    // CSSを動的に生成する
    const style = document.createElement('style');
    style.textContent = `
      #notification {
        display: none;
        position: fixed;
        top: -100px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #444444;
        color: white;
        padding: 20px 30px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: bold;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        text-align: center;
        z-index: 9999;
        transition: top 0.3s ease;
      }

      #notification span {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
      }

      #notification button {
        color: #e6e6fa;
        margin-top: 10px;
        padding: 10px 20px;
        background-color: transparent;
        background-image: url('https://github.com/akaina0112/Test/blob/82c44afa420b29c80bc691dfc8f7753b05a0f82a/cat.gif');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        animation: catWalk 5s linear infinite;
      }

      #notification button:hover {
        opacity: 0.8;
      }

      @keyframes catWalk {
        0% { background-position: left top; }
        100% { background-position: right top; }
      }
    `;
    document.head.appendChild(style);

    // HTMLを動的に生成する
    const notification = document.createElement('div');
    notification.id = 'notification';
    notification.innerHTML = `
      <span id="notification-message"></span><br>
      <span id="notification-message2"></span><br>
      <button id="notification-close">OK</button>
    `;
    document.body.appendChild(notification);

    // JavaScriptを動的に生成する
    // キーボードショートカットの無効化
    document.addEventListener('keydown', function(event) {
      if (event.ctrlKey && (event.key === 'u' || event.key === 's' || event.key === 'p')) {
        event.preventDefault();
        showNotification('このショートカットは無効化されています。');
      }
    });

    // 右クリックの無効化
    document.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      showRightClickNotification('右クリックは無効化されています。');
    });

    // 通知を表示する関数（ショートカット無効化用）
    function showNotification(message) {
      const notification = document.getElementById('notification');
      const notificationMessage = notification.querySelector('#notification-message');
      const notificationMessage2 = notification.querySelector('#notification-message2');
      notificationMessage.textContent = message;
      notificationMessage2.textContent = 'This shortcut has been disabled.';
      notification.style.display = 'block';
      notification.style.top = '20px';
    }

    // 通知を表示する関数（右クリック無効化用）
    function showRightClickNotification(message) {
      const notification = document.getElementById('notification');
      const notificationMessage = notification.querySelector('#notification-message');
      const notificationMessage2 = notification.querySelector('#notification-message2');
      notificationMessage.textContent = message;
      notificationMessage2.textContent = 'Right click is disabled.';
      notification.style.display = 'block';
      notification.style.top = '20px';
    }

    // OKボタンをクリックしたときの処理
    document.getElementById('notification-close').addEventListener('click', function() {
      const notification = document.getElementById('notification');
      notification.style.top = '-100px';
      setTimeout(() => {
        notification.style.display = 'none';
      }, 510);
    });
  }
}
