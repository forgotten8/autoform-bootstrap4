import { Template } from 'meteor/templating'
import { omit } from '../../../../utils/omit'
import './select-radio-inline.html'

Template.afRadioGroupInline_bootstrap4.helpers({
  atts () {
    const atts = omit(this.atts, 'data-schema-key')
    if (this.selected) {
      atts.checked = ''
    }
    atts.class = atts.class || ''
    atts.class += ' form-check-input'
    return atts
  },
  dsk () {
    return { 'data-schema-key': this.atts['data-schema-key'] }
  }
})
