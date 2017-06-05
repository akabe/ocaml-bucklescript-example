(** {2 Inpurely load bootstrap-native.js} *)

type bootstrap

external bootstrap : bootstrap =
  "bootstrap"
    [@@bs.val]
    [@@bs.module "bootstrap.native"]

let _ = bootstrap
