import { Template } from 'meteor/templating'
import { selectedAttsAdjustGroup } from '../../../../utils/selectedAttsAdjust'
import { dataSchemaKey } from '../../../../utils/dataSchemaKey'
import './select-checkbox-inline.html'

Template.afCheckboxGroupInline_bootstrap4.helpers({
  atts: selectedAttsAdjustGroup,
  dsk: dataSchemaKey
})
