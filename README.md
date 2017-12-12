SET UP:

Auth0.com:
1) Login/create account at auth0.com
2) Click + New Client
3) Give your client a name and select 'Single Page Web Applictions' (React)
4) Add each route in the pages directory to the 'Allowed Callback URLs' (ie http://localhost:3000/ AND http://localhost:3000/home etc for all 7 routes in /pages - no need to include _document.js)
5) Find OIDC Conformant setting under Clients -> Settings -> scroll down to 'Advanced' and click on OAuth. Turn OIDC Coformant off
6) Also in OAuth, select HS256 for JsonWebToken Signature Algorithm.  NOT RS256!!!
7) Make note of your Domain, Client ID and Client Secret - top of Settings


Graph.cool:
1) Login/create account at graph.cool
2) Create a project
3) Make note of the application API/ uri (it should look like: https://api.graph.cool/simple/v1/projectId)
4) Load schema (see server/graphcool/types.graphql). Copy and paste file contents into Graphcool schema editor
Alternatively, see here for info on using the Graphcool CLI:
 https://www.graph.cool/docs/reference/graphcool-cli/overview-zboghez5go/
4) Click on Auth0 under Integrations in the Console, add Domain, Client ID and Client Secret
5) For Moive and User types, adjust permissions: Console -> click + New Permission -> click CREATE -> click SELECT AFFECTED FIELDS -> click APPLY TO WHOLE TYPE -> click DEFINE RULES -> select AUTHENTICATION REQUIRED -> click Create Permission

IMPORTANT: USER and MOVIE schema permissions are ON for Everyone/Read and Authenticated/Create but other permissions are all off.


Local machine:

1) Yarn or npm install
2) Create .env file in root directory with variables:

AUTH0_DOMAIN
AUTH0_CLIENT_ID
GRAPHCOOL_URI

Fill in these variables with info from auth0 and graphcool

3) To start: 'yarn run dev' for dev work and hot module reload OR 'yarn run build && yarn run start' for production build.


