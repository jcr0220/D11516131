# 我的待辦清單 Web App

![工作坊完成徽章](https://img.shields.io/badge/GitHub_Copilot_實戰工作坊-已完成-1F883D?style=for-the-badge&logo=githubcopilot&logoColor=white)

這是在 GitHub Copilot 實戰工作坊完成的待辦清單 Web App。使用者可以新增與整理待辦事項、追蹤完成狀態，並依需求調整顯示主題與篩選清單。

## 線上展示

`https://<你的帳號>.github.io/<你的repo名稱>/`

## 功能

- 新增待辦事項；空白內容不會加入清單。
- 勾選待辦事項為已完成，完成項目會顯示刪除線並淡化。
- 刪除個別待辦事項。
- 一次清除所有已完成項目；執行前需確認，沒有已完成項目時按鈕會停用。
- 顯示整份清單的未完成數量，數字不受目前篩選影響。
- 依「全部」、「未完成」或「已完成」篩選項目，並在篩選結果為空時顯示相應提示。
- 切換淺色與深色模式；尚未手動選擇主題時，初次載入會依作業系統偏好設定。
- 使用 `localStorage` 保存待辦事項及手動選擇的主題，重新整理後仍可保留。
- 支援手機螢幕尺寸。

## 技術

- 使用 HTML、CSS 與原生 JavaScript 建置，沒有使用前端框架或套件。
- 介面樣式由 CSS 變數管理，並以媒體查詢支援主題與 RWD。
- 使用瀏覽器 `localStorage` 保存待辦事項及主題偏好。
- 不依賴外部 CDN，可直接以本機檔案開啟。

## 開發方式

- 使用 GitHub Copilot Agent Mode 協助依需求規劃與實作，並以瀏覽器操作確認功能。
- 透過 `.vscode/mcp.json` 設定 Microsoft Learn 與 GitHub MCP server，提供文件與 repository 整合設定。
- `.github/copilot-instructions.md` 記錄專案技術限制、程式風格與協作規則。
- `.github/prompts/fix-issue.prompt.md` 將 issue 工作流程整理成可重複使用的步驟，包含先讀取 issue、提出計畫並等候確認、建立分支、修改、驗證、提交及建立 PR。

## 我學到什麼

- 將需求拆成明確的功能與可在瀏覽器操作的驗收步驟。
- 使用原生 JavaScript 管理待辦狀態、更新 DOM，並以 `localStorage` 保存資料。
- 透過 CSS 變數與媒體查詢整理主題色彩及手機版版面。
- 以 Git 分支、提交與 Pull Request 管理 issue 修正流程。
- 將專案規則與重複工作流程寫成 instructions 和 prompt，讓協作步驟更一致。