import { Swipe } from "./Swipe";
import { SwipeItem } from "./SwipeItem";

type Component = typeof Swipe;

interface SwipeInterface extends Component {
  Item: typeof SwipeItem
} 

const LumuSwipe = Swipe as SwipeInterface;

LumuSwipe.Item = SwipeItem;

export default LumuSwipe;