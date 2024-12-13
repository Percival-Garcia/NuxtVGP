<template>
  <v-container>
    <v-app-bar app color="primary" dark elevation="4">
      <v-toolbar-title>
        <v-icon class="me-2">mdi-vuetify</v-icon> Starter Template
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="#">Nuxt 3</v-btn>
      <v-btn text href="#vuetifySection">Vuetify</v-btn>
      <v-btn text href="#launchesSection">GraphQL</v-btn>
      <v-btn text href="#rocketDetailsSection">Pinia</v-btn>
    </v-app-bar>

    <section class="hero">
      <h3 class="text-center my-5 display-1">
        Example Vuetify
        <v-chip color="blue" class="ms-2">Card</v-chip>
      </h3>

      <v-card class="mx-auto my-12" max-width="374" elevation="8">
        <template #progress>
          <v-progress-linear color="deep-purple" height="10" indeterminate />
        </template>

        <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" />

        <v-card-title>Cafe Badilico</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <ClientOnly>
              <v-rating :value="4.5" color="amber" dense half-increments readonly size="14" />
              <div class="grey--text ms-4">4.5 (413)</div>
            </ClientOnly>
          </v-row>

          <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
            seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4" />

        <v-card-title>Tonight's availability</v-card-title>

        <v-card-text>
          <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn color="deep-purple lighten-2">Reserve</v-btn>
        </v-card-actions>
      </v-card>
    </section>

    <section id="vuetifySection" class="py-5">
      <h3 class="text-center my-5 display-1">
        Example Vuetify
        <v-chip color="blue" class="ms-2">SimpleTable</v-chip>
        <v-chip color="orange" class="ms-2">Data from SpaceX GraphQL</v-chip>
      </h3>
      <p class="text-center">There are {{ ships?.length || 0 }} ships.</p>

      <v-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Active</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ship in ships" :key="ship.name">
            <td>{{ ship.name }}</td>
            <td>
              <v-chip :color="ship.active ? 'green' : 'red'">{{ ship.active }}</v-chip>
            </td>
          </tr>
        </tbody>
      </v-table>
  
    </section>

    <section id="launchesSection" class="py-5">
      <h3 class="text-center my-5 display-1">SpaceX Launches Data</h3>
      <v-row justify="center" class="mb-4">
        <v-chip color="blue" class="ms-2">SimpleTable</v-chip>
        <v-chip color="orange" class="ms-2">Data from SpaceX GraphQL</v-chip>
      </v-row>
      <p class="text-center">There are {{ sortedLaunches.length || 0 }} launches.</p>

      <v-row justify="center" class="my-5">
  <v-col cols="12" sm="6" class="d-flex justify-center">
    <v-select
      label="Filter by Year"
      :items="availableYears"
      v-model="selectedYear"
      dense
      outlined
      class="my-5"
      @change="fetchLaunchesByYear"
    />
  </v-col>

  <v-col cols="12" sm="6" class="d-flex justify-center">
    <v-select
      v-model="sortOrder"
      :items="['Ascending', 'Descending']"
      label="Sort By Launch Date"
      dense
      item-text="text"
      item-value="value"
      @change="toggleSortOrder"
    />
  </v-col>
</v-row>


      <v-table>
        <thead>
          <tr>
            <th class="text-left">Mission Name</th>
            <th class="text-left">Launch Date</th>
            <th class="text-left">Launch Site</th>
            <th class="text-left">Rocket Name</th>
            <th class="text-left">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="launch in sortedLaunches" :key="launch.id">
            <td>{{ launch.mission_name }}</td>
            <td>{{ new Date(launch.launch_date_utc).toLocaleDateString() }}</td>
            <td>{{ launch.launch_site?.site_name_long || 'Unknown site' }}</td>
            <td>{{ launch.rocket.rocket_name }}</td>
            <td>{{ launch.details || 'No details available' }}</td>
          </tr>
        </tbody>

      </v-table>
    </section>

    <section id="rocketDetailsSection" class="py-5">
      <h3 class="text-center my-5 display-1">Rocket Details</h3>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Rocket Name</th>
            <th class="text-left">Description</th>
            <th class="text-left">First Flight Date</th>
            <th class="text-left">Height (m)</th>
            <th class="text-left">Diameter (m)</th>
            <th class="text-left">Mass (kg)</th>
            <th class="text-left">Stages</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="rocket in rockets" :key="rocket.id">
            <td>{{ rocket.name }}</td>
            <td>{{ rocket.description }}</td>
            <td>{{ new Date(rocket.first_flight).toLocaleDateString() }}</td>
            <td>{{ rocket.height.meters }}</td>
            <td>{{ rocket.diameter.meters }}</td>
            <td>{{ rocket.mass.kg }}</td>
            <td>{{ rocket.stages }}</td>
          </tr>
        </tbody>
      </v-table>
    </section>

    <section class="py-5">
      <h3 class="text-center my-5 display-1">Favorite Rockets</h3>

      

      
    </section>  <!-- Favorite Rockets Section -->
    <section id="favoriteRocketsSection" class="py-5">
    

      <v-table>
        <thead>
          <tr>
            <th class="text-left">Rocket Name</th>
            <th class="text-left">Description</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="rocket in favoriteRockets" :key="rocket.id">
            <td>{{ rocket.name }}</td>
            <td>{{ rocket.description }}</td>
            <td>
              <v-btn color="orange" @click="removeFavorite(rocket)">
                Remove
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </section>
    


  </v-container>
  <v-footer color="primary" dark class="full-width py-3">
      <v-row justify="center">
        <v-col class="text-center">
          <span>&copy; {{ currentYear }} Percival Garcia. All rights reserved.</span>
        </v-col>
      </v-row>
    </v-footer>
</template>

<script lang="ts" setup>
const store = useCounter();
const selection = ref(0);

const queryShips = gql`
  query getShips {
    ships {
      id
      name
      active
    }
  }
`;
const { data: shipsData } = useAsyncQuery(queryShips);
const ships = computed(() => shipsData.value?.ships ?? []);

const queryLaunches = gql`
  query getLaunches {
    launches {
      id
      mission_name
      launch_date_utc
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
      }
      details
    }
  }
`;
const { data: launchesData } = useAsyncQuery(queryLaunches);
const launches = computed(() => launchesData.value?.launches ?? []);

const availableYears = computed(() => {
  const years = launches.value.map((launch) =>
    new Date(launch.launch_date_utc).getFullYear()
  );
  return Array.from(new Set(years)).sort((a, b) => a - b);
});

const selectedYear = ref<number | null>(null);
const filteredLaunches = computed(() => {
  if (!selectedYear.value) return launches.value;
  return launches.value.filter(
    (launch) =>
      new Date(launch.launch_date_utc).getFullYear() === selectedYear.value
  );
});

const sortOrder = ref("Ascending");
const toggleSortOrder = (newOrder: string) => {
  sortOrder.value = newOrder;
};

const sortedLaunches = computed(() => {
  return [...filteredLaunches.value].sort((a, b) => {
    const dateA = new Date(a.launch_date_utc);
    const dateB = new Date(b.launch_date_utc);
    if (sortOrder.value === "Ascending") {
      return dateA.getTime() - dateB.getTime();
    } else {
      return dateB.getTime() - dateA.getTime();
    }
  });
});

const queryRockets = gql`
  query getRockets {
    rockets {
      id
      name
      description
      first_flight
      height {
        meters
      }
      diameter {
        meters
      }
      mass {
        kg
      }
      stages
    }
  }
`;
const { data: rocketsData } = useAsyncQuery(queryRockets);
const rockets = computed(() => rocketsData.value?.rockets ?? []);

const currentYear = new Date().getFullYear();
</script>

<style scoped>
.hero {
  background-color: #f5f5f5;
  padding: 3rem 1rem;
  border-radius: 8px;
}

section {
  padding: 3rem 1rem;
}

.v-btn {
  margin: 0 0.5rem;
}

.v-table {
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem;
}

.v-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.v-footer {
  background-color: #3f51b5;
  color: white;
}

.v-chip {
  margin: 0.25rem;
}

.v-select {
  max-width: 400px;
}


</style>
