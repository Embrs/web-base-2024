```
// 父組件
mitt.on('get-data', (msg) => {
  console.log(msg);
});
onBeforeUnmount(() => {
  mitt.off('get-data');
});
```

```
// 子組件
mitt.emit('get-data', 123);
```
