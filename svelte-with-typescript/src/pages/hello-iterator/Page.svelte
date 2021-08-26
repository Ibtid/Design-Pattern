<script>
  import { onMount } from 'svelte';
  import { WeatherData } from '../../patterns/iterator/iterator';

  onMount(async () => {
    const cityName = new WeatherData();
    cityName.addItem('dhaka');
    cityName.addItem('chittagong');
    cityName.addItem('sylhet');

    const iterator = cityName.getIterator();

    console.log('Straight traversal:');
    while (iterator.valid()) {
      console.log(iterator.next());
    }

    /*const dhaka = await loadJSON(url);
    console.log(dhaka);

    url = `https://api.openweathermap.org/data/2.5/weather?q=chittagong&appid=${MY_APP_ID}`;
    const ctg = await loadJSON(url);
    console.log(ctg);

    url = `https://api.openweathermap.org/data/2.5/weather?q=rajshahi&appid=${MY_APP_ID}`;
    const raj = await loadJSON(url);
    console.log(raj);*/
  });
</script>

<h1>Iterator</h1>
