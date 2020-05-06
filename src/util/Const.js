export default {
    /** エラー桁数 */
    TITLE_MAX_LENGTH       : 50,
    STEP_TITLE_MAX_LENGTH  : 50,
    DESCRIPTION_MAX_LENGTH : 500,

    /** タイトルメッセージ */
    TITLE_TITLE       : "タイトル",
    STEP_TITLE        : "ステップ",
    DESCRIPTION_TITLE : "解説",

    /** エラーメッセージ */
    REQUIRED_ERR_MSG   : "必ず入力してください!!",
    MAX_LENGTH_ERR_MSG : (count) => {return count + "文字以内で入力してください!!"},

    /** メッセージ */
    ADD_STEP_MSG : (no) => {return "ステップ" + no + "を追加しました"},
}