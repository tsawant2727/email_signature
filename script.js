const allEmp = [
	{
		id: '114',
		name: 'Pratik Supekar',
		designation: 'Software Developer',
		department: 'Marketing',
		mobile: '7391908400',
		emial: 'pratik@emotorad.com',
	},
	{
		id: '84',
		name: 'Rohit Misal',
		designation: 'Product Desiginer',
		department: 'Marketing',
		mobile: '7045864711',
		emial: 'rohit.misal@emotorad.com',
	},
]

function getSignature() {
	const id = $('#emp_id').val()

	const emp = allEmp.find((ele) => ele.id === id)
	$('#emp_name').text(emp.name)
	$('#emp_designation').text(emp.designation)
	$('#emp_department').text(emp.department)
	$('#emp_number_label').text(emp.mobile)
	$('#emp_number_attr').attr('href', `tel:${emp.mobile}`)
	$('#emp_email_label').text(emp.emial)
	$('#emp_email_attr').attr('href', `mailto:${emp.emial}`)
}
