import Accordian from './accordian/Accordian'
import Calculator from './calculator/Calculator'
import ToggleBackgroundColor from './colortoggler/ToggleBackgroundColor'
import Counter from './counter/Counter'
import Meals from './mealsAPI/meals'
import SearchBar from './searchbar/SearchBar'
import Testimonials from './testomonials/testimonials'
import Todo from './todos/Todo'
import { accordionData } from './accordian/utils/content'

function App() {
  return (
    <div>
       {/* <Counter />  */}
      {/* <Todo /> */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
      {/* <ToggleBackgroundColor /> */}
      {/* <SearchBar /> */}
      {/* <Testimonials /> */}
      
      {accordionData.map(({ title, content }, index) => (
        <Accordian key={index} title={title} content={content} />
      ))}
      
    </div>
  )
}

export default App
