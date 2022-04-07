<template>
  <div>
      <p> <b>Your Plan: </b> {{plan.planName}}</p>
</div>
<apexchart type="donut" height="250" :options="chartOptions" :series="series" />
</template>


<script>

export default {

computed:{
plans(){
	let allPlans = this.$store.state.plans;

    let thisPlan = allPlans.find((aPlan)=>{return aPlan.planID == this.$route.params.pk});

    return thisPlan;
}
},

  name: "overview",

  data: function() {
   return {

				series: [{
          data: this.plan()
        }],
				chartOptions: {
					colors: ['#008FFB', '#00E396', '#FEB019'],
					animations: {
						enabled: true,
						easing: 'easeinout',
						speed: 1000,
					},
					fill: {
						type: 'gradient',
						gradient: {
							shade: 'dark',
							type: 'vertical',
							shadeIntensity: 0.05,
							inverseColors: false,
							opacityFrom: 1,
							opacityTo: 0.9,
							stops: [0, 100],
						},
					},
					chart: {
						toolbar: {
							show: false,
						},
					},
					title: {
						text: 'Donut',
						align: 'left',
						style: {
							color: '#000',
						},
					},
					labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Strawberry'],
					responsive: [
						{
							breakpoint: 480,
							options: {
								chart: {
									width: 250,
								},
								legend: {
									position: 'bottom',
								},
							},
						},
					],
					legend: {
						labels: {
							colors: '#000',
						},
					},
				},
			}
  },
  methods: {
    plan: function() {

        let allPlans = this.$store.state.plans;

    let thisPlan = allPlans.find((aPlan)=>{return aPlan.planID == this.$route.params.pk});

    return thisPlan;
    }
  }

     };
 </script>