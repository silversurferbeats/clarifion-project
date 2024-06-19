import imgIcon from '../assets/iconMcAfeeNorton.png'
import Nav from './Nav';
function Navbar() {
    return (
      <>
        {/* <Nav /> */}
        <nav
          class="flex items-center justify-between lg:px-8 mt-2"
          aria-label="Global"
        >
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">clarifion</span>
              <img
                class="h-4 md:h-8 w-auto"
                src="https://s3-alpha-sig.figma.com/img/5bdd/2e8e/ca6d33ae7930758c0396996013437236?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K1ngBfSSw0ItnMcH7G-UFRUEQhCOguQ~ar4XEsQW8RABf62DbThh3ZPl2JL5O92mjWiMJ0P-Cnx~pcj9X4WbvtSP2r5w1gKxef-ubp~YrDLqkDZ~q-I4qT4-HI45y-D-EsWWBLKO~P9DJUR9Y2SJQncErqcFY452m7Kg1L64f3~mSyBSsnUMvQ2eE6GWrN4N9qcYah6A8eSFp7frD0VlA5avjuqpAXS~LjhBAjOhwPROzCl1BDWwrU0N5EkkJaAp8F9xsFViFZu9Yc58~Zh2WOmGyUf73sSx1Sf3b7uW14Z7urx3KzZ7REwZ5IYtRStvI0HgqI4PL3jMeTM-tMxrcQ__"
                alt=""
              />
            </a>
          </div>
          <div class="lg:flex lg:flex-1 lg:justify-end">
            {/* <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
             */}
              <img
                class="h-4 md:h-8 w-auto"
                src={imgIcon}
                alt=""
              />
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;
  