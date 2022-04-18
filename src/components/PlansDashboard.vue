<template>
<br/>
  <div>
      <p> <b>Plan Name: </b> {{plan.planName}}</p>
</div>
<div id="chart">
    <apexchart type="donut" width="720" :options="chartOptions" :series="series"></apexchart>
</div>
</template>


<script>
import axios from "axios";

export default {

computed:{
plan(){
	let allPlans = this.$store.state.plans;

    let thisPlan = allPlans.find((aPlan)=>{return aPlan.planID == this.$route.params.pk});

    return thisPlan;
}
},

  data() {
   return {
				series: [],
				chartOptions: {
					chart: {
						width: 580,
						type: "donut",
						toolbar: {
							show: true,
						},
					},
					title: {
						text: 'Breakdown of Your Plan',
						align: 'left',
						style: {
							color: '#000',
						},
					},
					labels: ["Tuition","Books","Supplies","Miscellaneous Academic","Rent", "Groceries", "Utilities", "Phone", "Insurance", "Transportation", "Miscellaneous Living", "Entertainment", "Shopping","Food","Savings","Miscellaneous Personal","Job","Scholarships","Grants","Contributions","Miscelaneous Income"],
					colors: ['#FF0000', '#FF0000', '#FF0000', '#FF0000','#FFA500', '#FFA500','#FFA500','#FFA500','#FFA500','#FFA500','#FFA500','#069FF9','#069FF9','#069FF9', '#069FF9', '#069FF9','#228B22','#228B22','#228B22','#228B22','#228B22']
							,
					responsive: [
						{
							breakpoint: 680,
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

   created() {
    axios.get(`/plans/${this.$route.params.pk}/dashboard`).then((response) => {
		console.log("so heres the plan", response.data)
		
		var series = this.series;
		series.push(response.data.tuition);
		series.push(response.data.books);
		series.push(response.data.supplies);
		series.push(response.data.academic_misc);

		series.push(response.data.rent);
		series.push(response.data.groceries);
		series.push(response.data.utilities);
		series.push(response.data.phone);
		series.push(response.data.insurance);
		series.push(response.data.transportation);
		series.push(response.data.living_misc);

		series.push(response.data.entertainment);
		series.push(response.data.shopping);
		series.push(response.data.food);
		series.push(response.data.savings);
		series.push(response.data.personal_misc);

		series.push(response.data.job);
		series.push(response.data.scholarships);
		series.push(response.data.grants);
		series.push(response.data.contributions);
		series.push(response.data.income_misc);
    })
  },
} 
 </script>
