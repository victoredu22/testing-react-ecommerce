import {
  addCart,
  updateStock,
  deleteCart,
} from "../../../src/redux/states/cart";
import { Product } from "../../../src/interface/product";
import cartReducer from "../../../src/redux/states/cart";
import { localStorageMock } from "../../../src/utilities/localStorageMock.utility";

describe("Pruebas en cart", () => {
  const initialState: Product[] = [
    {
      id: 1,
      active: true,
      picture: {
        id: 0,
        src: "./assets/images/iphone4.jpg",
        className: "img-fluid",
        alt: "categoria-celulares",
      },
      brand: 0,
      title: "Apple",
      description: "iPhone 12 128GB Black",
      price: "899990",
      offerDiscount: true,
      shipping: true,
      levelStars: 3,
      stock: 6,
      publicationDate: "2021-04-01",
      inCart: 0,
    },
  ];

  const stateDiferrentId = {
    id: 99,
    active: true,
    picture: {
      id: 0,
      src: "./assets/images/iphone4.jpg",
      className: "img-fluid",
      alt: "categoria-celulares",
    },
    inCart: 0,
  };

  it("Agregar items al carro en localstorage", () => {
    localStorageMock.setItem("cart", initialState);
    const state = localStorageMock.getItem("cart");
    expect(state).toEqual(initialState);
    localStorageMock.clear();
  });

  it("Agregar vacio en caso que no exista localstorage", () => {
    const state = localStorageMock.getItem("cart");

    expect(cartReducer(undefined, { type: "unknown" })).toEqual(
      state === undefined && []
    );
  });

  it("agregar productos al carro", () => {
    //agregando producto al carro vacio
    const actualState = cartReducer([], addCart({ stateDiferrentId }));
    expect(1).toEqual(actualState[0].inCart);
    cartReducer(initialState, deleteCart(initialState[0].id));

    //agregando un producto que si existe
    const productExist = cartReducer(
      initialState,
      addCart({ product: initialState[0] })
    );

    expect(initialState[0].inCart).toBeLessThan(productExist[0].inCart);
    cartReducer(initialState, deleteCart(initialState[0].id));
  });

  it("agregar un producto que no se encuentra en la lista", () => {
    const actualState = cartReducer(
      initialState,
      addCart({ product: { ...stateDiferrentId } })
    );

    expect(actualState[1]).toEqual({
      ...stateDiferrentId,
      inCart: stateDiferrentId.inCart + 1,
    });
  });

  it("actualizar in cart cuando existe el producto", () => {
    const productAdd = cartReducer(
      initialState,
      updateStock({ id: initialState[0].id, type: "add" })
    );

    expect(productAdd[0].inCart).toEqual(initialState[0].inCart + 1);

    const productSubtract = cartReducer(
      initialState,
      updateStock({ id: initialState[0].id, type: "subtract" })
    );

    expect(productSubtract[0].inCart).toEqual(-1);
  });

  it("decrementar in cart cuando el producto no existe", () => {
    const productAdd = cartReducer(
      initialState,
      updateStock({ id: stateDiferrentId.id, type: "add" })
    );

    expect(productAdd[0].inCart).toEqual(0);

    const productSubtract = cartReducer(
      initialState,
      updateStock({ id: stateDiferrentId.id, type: "subtract" })
    );
    expect(productSubtract[0].inCart).toEqual(0);
  });

  it("se elimina el producto segun el id", () => {
    const product = cartReducer(initialState, deleteCart(initialState[0].id));
    expect(product.length).toEqual(0);
  });
});
