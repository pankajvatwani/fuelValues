import { countries } from './countries';
import { states } from './states';
import { TaxItems } from './TaxItems';
import { Customers } from './CustomerList';
import { Suppliers } from './SupplierList';

export const countryData = countries.map((country) => {
	return {
		value: country.code,
		name: country.name
	};
});

export const stateData = states.map((state) => {
	return {
		value: state.statecode,
		name: state.statename
	};
});

export const taxData = TaxItems.map((taxItem) => {
	return {
		value: taxItem.Code,
		name: taxItem.TaxItem
	};
});

export const customerData = Customers.map((customer) => {
	return {
		value: customer.Code,
		name: customer.Name
	};
});

export const supplierData = Suppliers.map((supplier) => {
	return {
		value: supplier.Code,
		name: supplier.Name
	};
});
