import { countries } from './countries';
import { states } from './states';
import { TaxItems } from './TaxItems';
import { Customers } from './CustomerList';
import { Suppliers } from './SupplierList';
import { FL } from './FLAirport';
import { fuelData } from './fuel';
import { aircraftType } from './aircraftType';
import { flightServiceType } from './flightServiceType';

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

export const IATAData = FL.map((airport) => {
	return { label: airport.IATA };
});

export const ICAOData = FL.map((airport) => {
	return { label: airport.ICAP };
});

export const fuelTypeData = fuelData.map((fuel) => {
	return { label: fuel };
});

export const aircraftTypeData = aircraftType.map((craft) => {
	return { label: craft };
});

export const flightServiceTypeData = flightServiceType.map((craft) => {
	return { label: craft };
});
