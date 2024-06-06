# (60%) JavaScript 網頁設計 1N 期末上機考-1 (P1)

##### 2024-6-6 at E201

#### Note:

1. 請不要發揮同學愛，作弊雙方除了本次考試 0 分外，平常分數另扣 20 分，情節嚴重者會送校。
2. iClass 上請繳交 md_p1_xx.zip (md 檔，所有圖片檔，pdf 檔)，及 p1_xx.zip 兩個檔案
3. 請直接將答案寫在 f1_p1_xx.md 上，老師實作的圖片放在 f1_p1_htc.pdf 上，請依照老師所給的圖片來實作並標註。
4. 跟期末考相關的檔案及目錄名稱有 xx 時，必須要改成學號後 2 碼，沒有修改時，會視違犯情況扣分。
5. 每一張圖片要有機房左側背景，圖片上要有你的學號(或後兩碼)，圖片標註要跟老師所標註的類似。違者會依情節扣分。
6. 有配分的每一題，都需要 git log 至 Github，沒有傳到 Github 者，會被扣該題 50%分數。
7. 請自評分數，將每一題的 ? 填入分數，沒有填者，不會批改，以 0 分計算。

##### Your (Name, ID): (?, ?)

##### P1 題目 (60%)

- P1-1 (15%): ? 分
- P1-2 (10%): ? 分
- P1-3 (20%): ? 分
- P1-4 (15%): ? 分

##### 總分: ? 分

---

## 注意：請依老師這次上機考所給的 code 開始撰寫，不可以寫在上課的 demo 中。本大題可以從 P2 題將 html, css, js 複製過來後修改，會比較快。

## (15%) P1-1: 請用 SQL 在 Supabase 建立 blog_in_xx table，並且用 Insert 指令匯入 6 筆資料，第一筆從你學號最後一個數字開始，往下輸入 6 筆資料，如下圖。

老師用的是最後一個數字 7 開始，往下六筆，至最後一筆，再從最上面一筆開始。

![f1-p1-1-1.png](f1-p1-1-1.png)

#### Your Answer

##### => SQL 指令 (create table 及 insert into)

![f1-p1-1-2.png](f1-p1-1-2.png)

##### => 顯示 Supabase blog_1n_xx 資料如上圖

![f1-p1-1-3.png](f1-p1-1-3.png)

##### => git log

```

```

---

#### (20%) P1-2: 執行 p1_xx.html，可以自 Supabase 抓取 P1-1 之 6 筆 blog 資料，顯示如下圖。

![f1-p1-2-1.png](f1-p1-2-1.png)

#### Your Answer

##### => Chrome 顯示如上圖

![f1-p1-2-2.png](f1-p1-2-2.png)

##### => 相關 js code

![f1-p1-2-3.png](f1-p1-2-3.png)
![f1-p1-2-4.png](f1-p1-2-4.png)

##### => git log

```

```

---

#### (20%) P1-3: 實作 All, Lifestyle, Travel 按鈕功能，點選後能篩選出所選的 category，所有篩選得到的資料都必須透過 Supabase 取得。

##### => lifestyle

![f1-p1-3-1.png](f1-p1-3-1.png)

##### => travel

![f1-p1-3-2.png](f1-p1-3-2.png)

##### => All

![f1-p1-3-3.png](f1-p1-3-3.png)

#### Your Answer

##### => lifestyle

![f1-p1-3-4.png](f1-p1-3-4.png)

##### => travel

![f1-p1-3-5.png](f1-p1-3-5.png)

##### => All

![f1-p1-3-6.png](f1-p1-3-6.png)

##### => 相關 js code

![f1-p1-3-7.png](f1-p1-3-7.png)

![f1-p1-3-8.png](f1-p1-3-8.png)

##### => git log

```

```

---

#### (15%) P1-4: 實作 Del 按鈕，請從最後一個 blog，往前刪除 4 筆，要能在 console 中顯示被刪除 blog 之 id。所有刪除的資料都必須實際在 Supabase 被刪除。

##### => Chrome 顯示 4 筆被刪除

![f1-p1-4-1.png](f1-p1-4-1.png)

##### => Supabase 顯示 4 筆被刪除後只剩下兩筆

![f1-p1-4-2.png](f1-p1-4-2.png)

#### Your Answer

##### => Chrome 顯示 4 筆被刪除

![f1-p1-4-3.png](f1-p1-4-3.png)

##### => Supabase 顯示 4 筆被刪除後只剩下兩筆

![f1-p1-4-4.png](f1-p1-4-4.png)

##### => 相關 js code

![f1-p1-4-5.png](f1-p1-4-5.png)

![f1-p1-4-6.png](f1-p1-4-6.png)

##### => git log

```

```

---
