# Node Starter — Backend Template
A minimal Node.js + TypeScript backend template using Express, Drizzle ORM (Postgres), Supabase auth, Zod validation and OpenAPI docs generated from Zod schemas.

## Install the dependencies
```bash
npm install
```
## Required entries ion the .env file
- DATABASE_URL
- SUPABASE_URL
- SUPABASE_ANON_KEY
- NODE_ENV (set it to 'local' for local testing)
- PORT
- RATE_LIMIT_WINDOW_MS
- RATE_LIMIT_MAX_REQUESTS

## Guide for development
### Database
- See the [`src/models`](src/models/) directory and define your table structure there
- Reflect the changes in the cloud by runnning the file [`db.sh`](db.sh)

### Define Corresponding Schema
- Define schema for the table in [`src/schemas`](src/schemas/) directory
- Register your schema for swagger

### Make the API endpoints
- define the endpoints in the [`src/routes`](src/routes/) section

### make the controllers
- define the controllers in the [`src/controllers`](src/controllers/) section

### Service/ helper functions
- define the Service/helper functions in the [`src/services`](src/services/) section
