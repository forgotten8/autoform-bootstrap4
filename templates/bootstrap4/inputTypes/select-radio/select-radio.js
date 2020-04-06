import { Template } from 'meteor/templating'
import { selectedAttsAdjustGroup } from '../../../../utils/selectedAttsAdjust'
import { dataSchemaKey } from '../../../../utils/dataSchemaKey'
import './select-radio.html'

Template.afRadioGroup_bootstrap4.helpers({
  atts: selectedAttsAdjustGroup,
  dsk: dataSchemaKey
})
