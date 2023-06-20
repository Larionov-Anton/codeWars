// * Функция rgb не завершена. Завершите его так, чтобы передача десятичных значений RGB привела к возвращению шестнадцатеричного представления. Допустимые десятичные значения для RGB - 0-255. Любые значения, выходящие за пределы этого диапазона, должны быть округлены до ближайшего допустимого значения. Примечание: Ваш ответ всегда должен состоять из 6 символов, сокращение с 3 здесь не сработает.
/*
function rgb(...args) {
  const validateArgs = args.map((item) => {
    if (item <= 0) {
      return (item = 0).toString(16);
    } else if (item > 255) {
      return (item = 255).toString(16);
    } else return item.toString(16);
  });
  const transformArgs = validateArgs.map((item) => {
    if (item.length < 2) return "0" + item;
    else return item;
  });

  return transformArgs.join("").toUpperCase();
}

// Оптимизированное 
const rgb = (r, g, b) =>
  [r, g, b].map(val => Math.max(0, Math.min(255, val)).toString(16).padStart(2, `0`)).join(``).toUpperCase();

	*/

//*	Завершите решение так, чтобы функция разбила camelcase на части, используя пробел между словами.

// function solution(string) {
//   return string.replace(/[A-Z]/g, " $&");
// }

// solution("helloWorld");

// * Напишите функцию, которая принимает строку фигурных скобок и определяет, является ли порядок фигурных скобок допустимым. Она должна возвращать, true если строка допустима, и false если она недопустима.

// const braces = "(){}[]"

// function validBraces(braces){
// 	let opening = [ '(', '[', '{']
// 	let closing = [ ')', ']', '}']
// 	let stack = []
// 	//console.log(closing.indexOf(braces[")"]) === opening.indexOf(arr[")"]))
// 	for (let i = 0; i < braces.length; i++) {
// 			const brace = braces[i]
// 			if (opening.includes(brace)) {
// 				stack.push(brace)
// 			} else
// 			if (closing.indexOf(brace) === opening.indexOf(stack[stack.length - 1])) {
// 				stack.pop()
// 			} else return false
// 	} return stack.length === 0;
// }

// function validBraces(braces){
//   let re = /\(\)|\{\}|\[\]/;
//   return re.test(braces) ? validBraces(braces.replace(re, '')) : '' === braces;
// }