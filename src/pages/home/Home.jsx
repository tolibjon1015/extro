import Today from '../../components/article/components/today/Today'
import Open from '../../components/open/Open'
import Subscribe from '../../components/subscribe/Subscribe'
import Tab from '../../components/tab/Tab'

function Home() {
    return (
        <div>
            <Subscribe />
            <Open />
            <Tab />
            <Today />
        </div>
    )
}

export default Home