import '@blocks/a';
import '@blocks/bullet-list';
import '@blocks/button';
import DropdownDate from '@blocks/dropdown-date';
import ExpandableCheckboxes from '@blocks/expandable-checkboxes';
import Feedback from '@blocks/feedback';
import FurnitureDropdownMenu from '@blocks/furniture-dropdown';
import GuestsDropdownMenu from '@blocks/guests-dropdown';
import '@blocks/iconed-list';
import DateMaskedInput from '@blocks/input';
import '@blocks/kit-header';
import LikeButton from '@blocks/like-button';
import Paginator from '@blocks/paginator';
import '@blocks/radio-list';
import '@blocks/rating';
import Slider from '@blocks/slider';
import '@blocks/title';
import '@blocks/toggle';
import '../layout/layout';
import './form-elements.scss';

DateMaskedInput.initDefault({});
DropdownDate.initAll({});
GuestsDropdownMenu.initAll({});
FurnitureDropdownMenu.initAll({});
ExpandableCheckboxes.initAll({});
Slider.initDefault({ options: { min: 80, max: 15500 } });
Paginator.initDefault({});
Feedback.initAll({});
LikeButton.initAll({ parent: $('.js-form-elements__likes')[0] });
