
// Building the page using a function and exporting it.

import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div>
      <h1>Coming from the Home Page Component now!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
        dignissimos unde eligendi pariatur vero vel quas, sint ipsa quibusdam
        dolorem laborum est asperiores ut veniam aliquam eius ipsum, delectus
        officiis.
      </p>

      {/* Wrapping a button(anything) in link to link it to a page/ */}
        <Link to="/Store">
      <button>
      Go to the Store!
      </button>
      </Link>
      {/* hint */}
       <Link to={`/Store/${4}`}>
      <button>
      Go to the Single item page
      </button>
      </Link>
    </div>
  );
};


// function Home() {
//     return (
//         <h1>Coming from the Home Page Component now!</h1>
//     );
//   }

export default Home;
