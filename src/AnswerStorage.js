export default {
    storageKey: 'allAnswers',
    getAnswers: function () {
        return JSON.parse(localStorage.getItem(this.storageKey))
    },
    setAnswers: function(answers){
        localStorage.setItem(this.storageKey, answers);
    }

}