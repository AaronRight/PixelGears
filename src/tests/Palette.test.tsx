import Palette from '../components/Palette/Palette';

/*
Possible positions:
315 000 045  
270     090  
215 180 135
*/
/*
test('generate', () => {
  let p: Palette = new Palette({});

  let position_random = 111;
  let test_default = p.generate(position_random)
  expect(test_default.length).toBe(3);

  let position_corner_1 = 315;
  let test_corner_1 = p.generate(position_corner_1)
  expect(test_corner_1.length).toBe(3);

  let position_corner_2 = 135;
  let test_corner_2 = p.generate(position_corner_2)
  expect(test_corner_2.length).toBe(3);

  let position_middle_1 = 90;
  let test_middle_1 = p.generate(position_middle_1)
  expect(test_middle_1.length).toBe(6);
  expect(test_middle_1[0].length).toBe(1);

  let position_middle_2 = 180;
  let test_middle_2 = p.generate(position_middle_2)
  expect(test_middle_2.length).toBe(1);
  expect(test_middle_2[0].length).toBe(6);
});

test('fill', () => {
  let p: Palette = new Palette({});
  let values = ["1", "2", "3", "4", "5"];

  let position_random = 111;
  let test_default = p.generate(position_random)
  p.fill(test_default, position_random, values)
  expect(test_default).toEqual([
    ['1', "", ""],
    ['2', 'button', ""],
    ['3', '4', '5']
  ]);

  let position_corner_1 = 45;
  let test_corner_1 = p.generate(position_corner_1)
  p.fill(test_corner_1, position_corner_1, values)
  expect(test_corner_1).toEqual([
    ['5', '4', '3'],
    ["", 'button', '2'],
    ["", "", '1']
  ]);

  let position_corner_2 = 135;
  let test_corner_2 = p.generate(position_corner_2)
  p.fill(test_corner_2, position_corner_2, values)
  expect(test_corner_2).toEqual([
    ["", "", '5'],
    ["", 'button', '4'],
    ['1', '2', '3']
  ]);

  let position_corner_3 = 215;
  let test_corner_3 = p.generate(position_corner_3)
  p.fill(test_corner_3, position_corner_3, values)
  expect(test_corner_3).toEqual([
    ['1', "", ""],
    ['2', 'button', ""],
    ['3', '4', '5']
  ]);

  let position_corner_4 = 315;
  let test_corner_4 = p.generate(position_corner_4)
  p.fill(test_corner_4, position_corner_4, values)
  expect(test_corner_4).toEqual([
    ['3', '2', '1'],
    ['4', 'button', ""],
    ['5', "", ""]
  ]);

  let position_middle_1 = 90;
  let test_middle_1 = p.generate(position_middle_1)
  p.fill(test_middle_1, position_middle_1, values)
  console.log(test_middle_1)
  expect(test_middle_1).toEqual([['1'], ['2'], ['3'], ['4'], ['5'], ['button']]);

  let position_middle_2 = 180;
  let test_middle_2 = p.generate(position_middle_2)
  p.fill(test_middle_2, position_middle_2, values)
  console.log(test_middle_2)
  expect(test_middle_2).toEqual([['1','2','3','4','5','button']]);
});*/
