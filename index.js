module.exports = {
  watch: {
    'model': {
      handler: function (value) {
        this.$emit('changed-model', value);
      },
      deep:true
    }
  },
  template: `
<div class="uk-margin-small-bottom">
    <span class="form__topic">Title</span> 
    <input v-model="model.title" class="uk-width-1-1" type="text" name="title">
    <span class="uk-text-muted form__hint"></span>
</div>
<div class="uk-margin-small-bottom">
    <span class="form__topic">Description</span> 
    <input v-model="model.description" class="uk-width-1-1" type="text" name="description">
    <span class="uk-text-muted form__hint">A one to two sentence description for this object.</span>
</div>
<div class="uk-margin-small-bottom">
    <span class="form__topic">Keywords</span> 
    <input v-model="model.description" class="uk-width-1-1" type="text" name="description">
    <span class="uk-text-muted form__hint">Keywords for this object.</span>
</div>
  `,
  props: ['model']
};
