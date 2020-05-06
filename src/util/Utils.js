import lodash from 'lodash';
export default {
    max_length: function(value, count) {
        return value.length <= count || count + "文字以内で入力してください!!";
    },
    required: function(value) {
        return !lodash.isEmpty(value) || "必ず入力してください!!";
    }
}