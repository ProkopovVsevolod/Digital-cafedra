export function sealed(constructor: Function, proto? :any) {
	Object.seal(constructor);
	Object.seal(constructor.prototype);
}

export function upperString(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	const originalFunction = descriptor.value;
	descriptor.value = function (...args: any[]) {
		return originalFunction.apply(this, args).toUpperCase();
	};
}