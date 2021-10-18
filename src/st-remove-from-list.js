module.exports = function removeKFromlest(l, k) {

  if (l.value === k) l = l.next;

  let lest = l;

  while (lest.next) {
    if (lest.next.value === k) {
      lest.next = lest.next.next;
    } else {
      lest = lest.next;
    }
  }
  
  return l;
}
